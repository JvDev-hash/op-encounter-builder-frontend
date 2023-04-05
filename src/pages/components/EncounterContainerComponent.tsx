import Select from 'react-select'
import { Roboto } from 'next/font/google'
import styles from '@component/styles/Encounter.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
const roboto = Roboto({ weight: "100", subsets: ['latin'] })

const EncounterContainerComponent = ( monstersOptions: any ) => {
    const colourStyles = {
        option: (styles: any, { data, isDisabled, isFocused, isSelected }) => {
          return {
            ...styles,
            backgroundColor: isFocused ? "#999999" : null,
            color: "#333333"
          };
        }
      };

    return (
        <div className={styles.selectContainer}>
            <div className={styles.leftContainer}>
                <label className={styles.label}>NEX total do grupo</label>
                <input 
                    className={styles.inputText} 
                    type='text'
                    placeholder='Ex.: 50'/>
            </div>
            <div className={styles.rightContainer}>
                <button className={styles.addEnemy} title="addMonster" ><FontAwesomeIcon icon={faPlus} size="1x"/> Add Monster </button>
                <Select className={styles.monsterSelect} 
                        options={ monstersOptions.monstersOptions }
                        styles={colourStyles}
                />
            </div>
            <div className={styles.resultContainer}>
                <p>TEXTO</p>
            </div>
        </div>
    );
}

export default EncounterContainerComponent;