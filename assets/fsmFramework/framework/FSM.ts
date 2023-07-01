import FSMStateBase from "../base/FSMStateBase";

/**
 * 状态机
 */
export default class FSM {
    protected _mapState: Map<string, FSMStateBase> = new Map() //所有状态集合
    protected _curState: FSMStateBase | null = null //当前状态

    /**
     * 注册状态
     * @param key 状态名 
     * @param state 状态类 
     */
    regState(key: string, state: FSMStateBase) {
        if (key === "" || state === null) {
            console.error(">>> 状态名或状态类不能为空!");
            return;
        }

        if (this._mapState.has(key)) {
            console.warn(">>> 重复注册该状态");
            return;
        }

        this._mapState.set(key, state)
    }

    /**
     * 删除状态
     * @param key 状态名 
     */
    deleState(key: string) {
        if (key === "" || !this._mapState.has(key)) {
            console.error(">>> 状态名不能为空 或 未注册该状态!");
            return
        }

        this._mapState.delete(key)
    }

    /**
     * 设置默认状态 -- 只有当前无状态时生效
     * @param key 
     * @returns 
     */
    setDefaultState(key: string) {
        if (key === "" || !this._mapState.has(key)) {
            console.error(">>> 状态名不能为空 或 未注册该状态!");
            return
        }

        if (!this._curState) {
            this._curState = this._mapState.get(key)
            this._curState.onEnter()
        }
    }

    /**
     * 切换状态
     * @param key 新切换的状态名 
     */
    switchState(key: string) {
        if (key === "" || !this._mapState.has(key)) {
            console.error(">>> 状态名不能为空 或 未注册该状态!");
            return
        }

        if (this._curState) {
            if (this._curState === this._mapState.get(key)) return
            this._curState.onExit()
        }

        this._curState = this._mapState.get(key)
        this._curState.onEnter()
    }

    /**
     * 获取所有已注册的状态
     * @returns 所有已注册的状态
     */
    get_mapStates(): Map<string, FSMStateBase> {
        return this._mapState
    }

    /**
     * 获取当前状态
     * @returns 
     */
    getCurrentState(): FSMStateBase {
        return this._curState
    }

    onUpdate(dt) {
        if (!this._curState || !this._curState.onUpdate) {
            console.error(">>> 当前无状态！");
            return
        }

        this._curState.onUpdate(dt)
    }

}
