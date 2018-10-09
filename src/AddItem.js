import React from 'react';

const AddItem = (props) => {
    var options = props.addItems.map(item => {
        return <option key={item.id}>{item.name}</option>
    });

    return (
        <form>
            <div className="form-group">
                <label>Quantity</label>
                <input type="text" className="form-control" onChange={(e) => console.log(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Products</label>
                <select className="form-control" id="exampleFormControlSelect1">
                    <option>Select an option...</option>
                    {options}
                </select>
            </div>
            <button type="submit" className="btn btn-primary" onSubmit={props.newItem}>Submit</button>
        </form>
    )
}


export default AddItem