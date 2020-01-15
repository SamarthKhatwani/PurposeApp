import React, {useState} from 'react';
import Popup from "reactjs-popup";

function AddNewElement(props){
    const [val, setVal] = useState('');

    const handleChange = (event) => {
        setVal(event.target.value)
    }
    return(
        <form onSubmit={(event) => {
            props.handleSubmit(val);
            event.preventDefault();
        }}>
            <input type="text" value={val} onChange={handleChange} />
            <input type="submit" value="Submit" />
        </form>
    );
}

function ParticularElement(props){
    const items = props.items;
    const setItems = props.setItems;
    const [add, setAdd] = useState(0);
    const liItems = items.map((item) => <li>{item}</li>)

    const handleClick = () => {
        if(add){
        setAdd(0);
        }else{
            setAdd(1);
        }
        console.log(add);
    }

    const handleSubmit = (value) => {
        setItems((items) => items.concat(value));
        setAdd(0);
    }
    return(
        <div>
            <Popup trigger={<button>{props.name}</button>} position="right center" modal>
                <ul>{liItems}</ul>
                {add === 0 && <button onClick={handleClick}>Add New Elements</button>}
                {add !== 0 && <AddNewElement handleSubmit={handleSubmit} />}
            </Popup>
        </div>
    );
}


function MainComponent(){
    const [loveitems, setLoveItems] = useState([]);
    
    // console.log(items);
    return(
        <div>
            <ParticularElement items={loveitems} setItems={setLoveItems} name="Things that you love"/>
        </div>
    );
}

export default MainComponent;