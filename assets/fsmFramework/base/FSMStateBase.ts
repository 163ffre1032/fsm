
/**
 * 状态基类
 */
export default class FSMStateBase {
    protected targetComponent: cc.Component | null = null

    constructor(targetComponent: cc.Component) {
        this.targetComponent = targetComponent
    }

    /**进入状态时调用 */
    onEnter() { }

    /**每帧调用 */
    onUpdate(dt) { }

    /**退出状态时调用 */
    onExit() { }

    /**事件监听 */
    onEvent(event) { }

}