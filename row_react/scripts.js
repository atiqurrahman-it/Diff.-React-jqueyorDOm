const domContainer = document.querySelector('#root');
// console.log(React)

const MyElement =()=>{
    return(
        <div>
        <h1 id="display"> 0</h1>
      
        <button  id="button"  >Increment +</button>
        <button  id="button_2" >Decrement -</button>
        </div>
        );
    };




ReactDOM.render(MyElement(),domContainer);



// const root = ReactDOM.createRoot(domContainer);

// root.render(e(myElement));
