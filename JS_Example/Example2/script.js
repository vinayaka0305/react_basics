const container = React.createElement('div',{className:'container'},"hello");
console.log(container);

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(container)