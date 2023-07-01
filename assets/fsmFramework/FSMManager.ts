import FSM from "./framework/FSM";

/**
 * 状态机管理类
 */
export default class FSMMannager {
    private static _instance: FSMMannager | null = null;
    public static get instance(): FSMMannager {
        if (!this._instance) {
            this._instance = new FSMMannager();
        }
        return this._instance;
    }

    private _mapFSM: Map<string, FSM> = new Map<string, FSM>();

    /**
     * 获取状态机，若不存在则新建并返回
     * @param key 状态机名称
     * @returns 状态机
     */
    getFSM(key: string): FSM | null {
        if (key === "") {
            console.error(">>> 未输入状态机名称");
            return;
        }

        let fsm: FSM | null = null;
        if (!this._mapFSM.has(key)) {
            fsm = new FSM()
            this._mapFSM.set(key, fsm)
        } else {
            fsm = this._mapFSM.get(key)
        }

        return fsm
    }

    /**
     * 删除状态机
     * @param key 
     */
    deleFSM(key: string) {
        if (this._mapFSM.has(key)) {
            this._mapFSM.delete(key)
        }
    }

    /**
     * 清空状态机
     */
    clearFSM() {
        this._mapFSM.clear()
    }

    /**
     * 状态机状态更新
     * @param dt 
     */
    onUpdate(dt) {
        this._mapFSM.forEach((value: FSM, key: string) => {
            value.onUpdate(dt)
        })
    }


    //...
} 