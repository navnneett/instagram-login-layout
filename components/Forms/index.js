import styles from './Form.module.css'

export default function Form() {
    return(
        <>
            <section className={styles.loginSection}>
                <div className={styles.loginArea}>
                    <div className={styles.logoContainer}>
                        <img src={'/images/instagram_logo.png'} alt="Instagram Logo"/>
                    </div>
                    <div className={styles.inputContainer}>
                        <input type="text" className={styles.identity} placeholder="Phone, number, username, or email" />
                        <input type="password" placeholder="Password" className={styles.inputField}/>
                    </div>
                    <button className={styles.loginButton}>Log in</button>
                    <div className={styles.orContainer}>
                        <div className={styles.lines}>
                            <div className={styles.orSection}>OR</div>
                        </div>
                    </div>
                    <div className={styles.facebookLoginContainer}>
                        <img src={'/images/facebook_logo.png'} alt="Instagram Logo"/>
                        <span>Login in with Facebook</span>
                        </div>

                        <div className={styles.forgotPassword}>
                            <p>Forgot Password?</p>
                        </div>
                    </div>

                    <div className={styles.signUpContainer}>
                        <span>Don't have an account? <a href="#">Sign Up</a></span>
                    </div>

                    <div className={styles.appStore}>
                        <p>Get the app.</p>
                        <img src={'/images/appstore_logo.png'} alt="App Store Logo"/>
                        <img src={'/images/googleplay_logo.png'} alt="Google Play Logo"/>
                    </div>
                </section>
            
        </>
    )
}