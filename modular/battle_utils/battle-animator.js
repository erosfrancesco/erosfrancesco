class PhaserAnimator {
	constructor(options) {
        options = options || {};
        let {busy} = options;
        busy = busy || false;
		this.busy = busy;
	}
	
	get busy() {
		return this._busy;
	}
	set busy(v) {
		this._busy = v;
	}

    get actions() {
        return this._actions;
    }
    set actions(v) {
        this._actions = v;
    }

}

export default class ActionRegistry extends PhaserAnimator {
    constructor(options) {
        options = options || {};
        let {actions, busy} = options;
        actions = actions || [];
        super({busy});
        
        this.actions = actions;
    }
    

    get currentPlayerActionToBeExecuted() {
        return this._currentPlayerActionToBeExecuted;
    }
    set currentPlayerActionToBeExecuted(v) {
        this._currentPlayerActionToBeExecuted = v;
    }

    get firstAction() {
    	return this.actions[0];
    }

    get hasAction() {
    	return this.actions.length;
    }
    

    add(Action) {
        this.actions.push(Action);
    }

    removeFirstAction() {
        this.actions.pop();
        this.busy = false;
    }

    resolve() {
    	this.busy = true;
        this.actions[0].resolve( () => this.removeFirstAction() );
    }    

}

//export default {PhaserAnimator, ActionRegistry};