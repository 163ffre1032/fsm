import FSMStateBase from "../FSMStateBase"

/**
 * Idle状态类
 */
export default class IdleState extends FSMStateBase {

    onEnter() {
        console.log(">> this.targetComponent:", this.targetComponent);
        console.log(">>> 进入Idle状态")
    }

    onUpdate(dt) { }

    onExit() {
        console.log(">>> 退出Idle状态！")
    }

    onEvent(event) {
        console.log(">>> 触发Idle状态中的事件")
    }
}