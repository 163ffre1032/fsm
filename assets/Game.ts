import FSMMannager from "./fsmFramework/FSMManager";
import IdleState from "./fsmFramework/base/states/IdleState";
import RunState from "./fsmFramework/base/states/RunState";
import FSM from "./fsmFramework/framework/FSM";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Game extends cc.Component {
    private _fsm: FSM = null //状态机

    onLoad() {
        this.onInit()
    }

    //初始化状态机并注册状态并设置默认状态
    onInit() {
        this._fsm = FSMMannager.instance.getFSM("player")
        if (this._fsm) {
            this._fsm.regState("Idle", new IdleState(this))
            this._fsm.regState("Run", new RunState(this))
            this._fsm.setDefaultState("Idle")
        }
    }

    //注册事件触发
    onEvent(event) {
        const fsm = this._fsm.getCurrentState()
        if (fsm) {
            fsm.onEvent(event)
        }
    }

    swtichState(e, arg) {
        this._fsm.switchState(arg)
    }

}
