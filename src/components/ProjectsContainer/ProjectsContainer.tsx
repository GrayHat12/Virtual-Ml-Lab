import React, { Component } from 'react'
import styles from './ProjectsContainer.module.css';


export class ProjectsContainer extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.title}>Projects</div>
                <div className={styles.startBtn}><svg className={styles.svgNew} width="50" height="50" viewBox="0 0 63 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M39.375 0H7.875C3.54375 0 0.0393759 3.15 0.0393759 7L0 63C0 66.85 3.50437 70 7.83562 70H55.125C59.4563 70 63 66.85 63 63V21L39.375 0ZM47.25 49H35.4375V59.5H27.5625V49H15.75V42H27.5625V31.5H35.4375V42H47.25V49ZM35.4375 24.5V5.25L57.0938 24.5H35.4375Z" fill="white"/></svg>
                <span className={styles.newBtnText}>Start Blank Workspace</span></div>
                <div className={styles.border}></div>
                <div className={styles.presetTitle}>....or Start with Preset Data :</div>
                <div className={styles.presetsCon}>
                    <div className={styles.preset}></div>
                    <div className={styles.preset}></div>
                    <div className={styles.preset}></div>
                </div>
            </div>
        )
    }
}

export default ProjectsContainer
