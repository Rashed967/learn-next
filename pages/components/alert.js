import styles from './alert.module.css'
import {clsx} from 'clsx'



export default function Alert({children, type}){
    return(
        <div
        className={clsx({
            [styles.module.css] : type === 'success',
            [styles.module.css] : type === 'error'
        })}
        >
            {children}
        </div>
    )
}

