import React from 'react';
import '../design/Footer.css';
import cc from '../images/cc.png';

function Footer(){
    return(
        <footer>
            <text><img src={cc} width="16px"></img> 2022. Izrada projekta u sklopu predmeta "Projekt R" na Fakultetu elektrotehnike i računarstva u Zagrebu.</text>
            <text>Izradili: Dominik Đurinić i Ante Kolobarić</text>
        </footer>
    )
}
export default Footer;