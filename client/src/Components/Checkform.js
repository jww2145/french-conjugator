import React, {useState} from "react";

function Checkform({ array, label, tense, setTenses}){
    const [isChecked, setIsChecked] = useState(false);

    function handleChange(){
        setIsChecked(!isChecked)

        isChecked ? handleRemove() : handleAdd()

    }

    function handleAdd(){
        array.push(tense)
        setTenses(array)
        console.log(array)
    }

    function handleRemove(){
        const index = array.indexOf(tense)
        array.splice(index,1)
        setTenses(array)
        console.log(array)
    }
    return (
      <div className="checkbox-wrapper">
        <label>
          <input onChange={handleChange} type="checkbox" />
          <span>{label}</span>
        </label>
      </div>
    );
  };

  export default Checkform;