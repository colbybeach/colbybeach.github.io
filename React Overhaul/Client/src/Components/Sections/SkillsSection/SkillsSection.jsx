import React, { useState } from 'react'
import { useEffect } from 'react';
import useWindowSize from '../../../useWindowSize';
import SkillChoser from '../../SkillChooser/SkillChoser'
import SkillShowcaseContainer from '../../SkillShowcaseContainer/SkillShowcaseContainer'
import styles from './skillssection.module.css'


export default function SkillsSection() {

    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
      }
      
    const images = importAll(require.context('../../../Images/Skill Images/', false, /\.(png|jpe?g|svg)$/));
      

    const [whatActive, setActive] = useState(0);


    const languageData = {
        worked: [images['c-sharp.png'], images['php.png']],
        proficient: [images['java.png'], images['python.png'], images['swift.png']],
        lead: [images['javascript.png']]
    }
    const webData = {
        worked: [images['mongodb.png'],images['sql.png'],images['rest-api.png'],images['aws.png']],
        proficient: [images['firebase.png'], images['graphql.png'], images['neo4j.png']],
        lead: [images['html.png'], images['css.png']]
    }
    const frameData = {
        worked: [images['node.png'],images['bootstrap.png'],images['jquery.png']],
        proficient: [images['swiftui.png'], images['materialui.png']],
        lead: [images['react.png'],images['antd.png']]
    }
    const techData = {
        worked: [images['docker.png'], images['vs.png'],images['figma.png']],
        proficient: [images['xcode.png'],images['adobe.png'],images['office.png']],
        lead: [images['git.png'], images['unix.png'], images['vscode.png'], images['jetbrains.png']]
    }

    const allData = {
        worked: languageData.worked.concat(webData.worked,frameData.worked,techData.worked),
        proficient: languageData.proficient.concat(webData.proficient, frameData.proficient, techData.proficient),
        lead: languageData.lead.concat(webData.lead,frameData.lead,techData.lead),

    }


    const [data, setData] = useState(languageData);
    const width = useWindowSize();


    useEffect(() => {
     
        if(width < 1000){
            setData(allData)
            return;
        }else{
            if(whatActive === 0) setData(languageData)
            else if (whatActive === 1) setData(webData)
            else if(whatActive === 2) setData(frameData)
            else setData(techData);
        }
    }, [whatActive, width])


    return (

        <div className={styles.mainBannerContainer}>

            <SkillChoser whatActive={whatActive} setActive={setActive}/>
            <SkillShowcaseContainer data={data}/>
            
        </div>

    )

}
