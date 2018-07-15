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

class ActionRegistry extends PhaserAnimator {
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
    

    add(Action) {
        this._actions.push(Action);
    }


    resolve() {

        if (!this.actions[0]) { return; }
        
        this.busy = true;
        this.actions[0].resolve( () => {
            this._actions.pop();
            this.busy = false;
        });
    }

}
