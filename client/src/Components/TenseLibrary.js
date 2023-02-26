import React, {useState} from "react";
import Checkform from "./Checkform";
import '../App.css';

function TenseLibrary({setTenses, tenses}){

    const tense_array = tenses

    return(
        <div>
            <h1>Indicatif</h1>
                <div className="tense-holder">
                    <Checkform  array = {tense_array} setTenses = {setTenses} tense = {"indicatif_present"} label="Present"/>
                    <Checkform array = {tense_array} setTenses = {setTenses} tense = {"indicatif_passeSimple"} label="Passé-Simple"/>
                    <Checkform array = {tense_array} setTenses = {setTenses} tense = {"indicatif_imparfait"} label="Imparfait"/>
                </div>
                <div className="tense-holder">
                    <Checkform array = {tense_array} setTenses = {setTenses} tense = {"indicatif_passeCompose"} label="Passé-Composé"/>
                    <Checkform array = {tense_array} setTenses = {setTenses} tense = {"indicatif_futurSimple"} label="Futur Simple"/>
                    <Checkform array = {tense_array} setTenses = {setTenses} tense = {"indicatif_passeAnterieur"} label="Passe Anterieur"/>
                </div>
                <div className="tense-holder">
                    <Checkform array = {tense_array} setTenses = {setTenses} tense = {"indicatif_plusQueParfait"} label="Plus-Que-Parfait"/>
                    <Checkform array = {tense_array} setTenses = {setTenses} tense = {"indicatif_futurAnterieur"} label="Futur Anterieur"/>
                </div>
            <h1>Subjonctif</h1>
                <div className="tense-holder">
                    <Checkform array = {tense_array} setTenses = {setTenses} tense = {"subjonctif_present"} label="Present"/>
                    <Checkform array = {tense_array} setTenses = {setTenses} tense = {"subjonctif_passe"} label="Passe"/>
                    <Checkform array = {tense_array} setTenses = {setTenses} tense = {"subjonctif_imparfait"} label="Imparfait"/>
                </div>
                <div className="tense-holder">
                    <Checkform array = {tense_array} setTenses = {setTenses} tense = {"subjonctif_plusQueParfait"} label="Plus-Que-Parfait"/>
                </div>
            
            <h1>Conditionnel</h1>
                <div className="tense-holder">
                    <Checkform array = {tense_array} setTenses = {setTenses} tense = {"conditionnel_present"} label="Present"/>
                    <Checkform array = {tense_array} setTenses = {setTenses} tense = {"conditionnel_1reForme"} label="Passe 1re Forme"/>
                    <Checkform array = {tense_array} setTenses = {setTenses} tense = {"indicatif_2eForme"} label="Passe 2e Forme"/>
                </div>
        </div>
    )
}

export default TenseLibrary