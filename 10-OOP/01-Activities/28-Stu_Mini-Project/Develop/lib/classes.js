class Component {
    constructor (children = []) {
        this.children = children;
    }
    render () {
        throw new Error("Child class must implement render() method.");
    }
    renderInnerHTML() {
        this.children.map(child =>
            typeof child === 'string' ? child : child.render())
            .join('')
    }
}

class Header extends Component { 
    constructor(date) {
        this.date = date;
    }
    render () {
        return '<header class="header"><h1>Todo Today</h1><p>${this.date}</p></header>.'
    }
}

class TaskListItem extends Component {
    constructor (children, priority) {
        super(children);
        this.priority = priority;
    }
 render () {
    const className = this.priority ? 'tasks-item-priority' : '';
    return '<li class="tasks-item ${classNamme}">${this.renderInnerHTML()} </li>';
 }
}

class TaskList extends Component {
    constructor(children) {
        this.children = children;
    }
    passtoParent(children) {
    super(children).push(children);
}
    render() {
        return '<ul class="tasks">{INNER_HTML}</ul>'
    }
}