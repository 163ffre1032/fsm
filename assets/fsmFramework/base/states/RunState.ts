import FSMStateBase from "../FSMStateBase"

/**
 * Run状态类
 */
export default class RunState extends FSMStateBase {

    onEnter() {
        console.log(">> this.targetComponent:", this.targetComponent);
        console.log(">>> 进入Run状态")
    }

    onUpdate(dt) { }

    onExit() {
        console.log(">>> 退出Run状态！")
    }

    onEvent(event) {
        console.log(">>> 触发Run状态中的事件")
    }
}