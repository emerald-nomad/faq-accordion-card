import styles from '../styles/Home.module.scss'
import {useState} from "react";

interface QuestionProp {
    question: string;
    answer: string;
}

const Question: React.FC<QuestionProp> = ({question, answer}) => {
    const [expanded, setExpanded] = useState(false);
    const onQuestionClick = () => setExpanded(!expanded);
    return (
        <div className={`${styles['question-container']} ${expanded ? styles['question-expanded'] : ""}`}>
            <div className={styles['question-header']} onClick={onQuestionClick}>
                <h2>{question}</h2>
                <img src="/images/icon-arrow-down.svg" alt="Down Arrow"/>
            </div>
            <div className={styles['question-content']}>
                <p>{answer}</p>
            </div>
        </div>
    );
}

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles['img-container-mobile']}>
                <img
                    className={styles['bg-pattern-mobile']}
                    src="/images/bg-pattern-mobile.svg"
                    alt="Background Pattern"
                />

                <img
                    className={styles['woman-online-mobile']}
                    src="/images/illustration-woman-online-mobile.svg"
                    alt="Woman Online"
                />
            </div>
            <img src="/images/illustration-box-desktop.svg" className={styles['box-desktop']} alt="Box"/>
            <div className={styles['img-container-desktop']}>
                <img
                    className={styles['bg-pattern-desktop']}
                    src="/images/bg-pattern-desktop.svg"
                    alt="Background Pattern"
                />

                <img
                    className={styles['woman-online-desktop']}
                    src="/images/illustration-woman-online-desktop.svg"
                    alt="Woman Online"
                />
            </div>

            <div className={styles['content-container']}>
                <h1 className={styles.title}>FAQ</h1>

                <Question
                    question="How many team members can I invite?"
                    answer="You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan"
                />

                <Question
                    question="What is the maximum file upload size?"
                    answer="No more than 2GB. All files in your account must fit your allotted storage space."
                />

                <Question
                    question="How do I reset my password?"
                    answer="Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."
                />

                <Question
                    question="Can I cancel my subscription?"
                    answer="Yes! Send us a message and we’ll process your request no questions asked."
                />

                <Question
                    question="Do you provide additional support?"
                    answer="Chat and email support is available 24/7. Phone lines are open during normal business hours."
                />
            </div>

        </div>
    )
}
