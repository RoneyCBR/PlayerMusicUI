'use client'
import { useState } from 'react'
import Typography from "@mui/material/Typography";
import styles from './login.module.css';
import Card from "@mui/material/Card";
import { InputBaseRoundedWithIcon } from "../components/Inputs/InputTextWithIcon";
import FormControl from "@mui/material/FormControl";
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import Divider from '@mui/material/Divider';
import GoogleIcon from '@mui/icons-material/Google';
import HeadphonesIcon from '@mui/icons-material/Headphones';

const Login = () => {

  const [tab,setTab] = useState(0);
  const [ formData, setFormData ] = useState({
    keyUser: '',
    keyPass: ''
  } as any);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleChangeTab = (pos: number) => {
    setTab(Number(pos));
  };

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <HeadphonesIcon sx={{fontSize:"40px",color:'white'}} /><span><Typography color="secondary" variant='h4'>Player Music</Typography></span>
        <Typography color="secondary" variant='h5'>Login</Typography>
        <div className={styles.contentForm}>
          <Card className={styles.cardLogin}>
            <nav className={styles.options}>
              <button onClick={() => handleChangeTab(0)} className={`${styles.option} ${tab === 0 && styles.active}`} tabIndex={0}>
                <Typography color="secondary">LogIn</Typography>
              </button>
              <button onClick={() => handleChangeTab(1)} className={`${styles.option} ${tab === 1 && styles.active}`} tabIndex={0}>
                <Typography color="secondary">SignIn</Typography>
              </button>
            </nav>
            <form className={styles.form}>
              <FormControl className={styles.formControl}>
                <InputBaseRoundedWithIcon 
                  typeIcon="user"
                  type="text"
                  placeholder="User / Email"
                  name="keyUser"
                  className={styles.itemInput}
                  onChange={handleChange}
                  value={formData?.keyUser ||''}
                  autoComplete='new-user'
                />
              </FormControl>
              <FormControl className={styles.formControl}>
                <InputBaseRoundedWithIcon 
                  typeIcon="password"
                  type="password"
                  placeholder="Password"
                  name="keyPass"
                  className={styles.itemInput}
                  onChange={handleChange}
                  value={formData?.keyPass ||''}
                  autoComplete='new-password'
                />
              </FormControl>
              <div className={styles.boxButton}>
                <Button variant="contained" startIcon={<LoginIcon />} className={styles.buttonLogin} />
              </div>
            </form>
            <div className={styles.bottomForm} />
          </Card>
        </div>
        <div className={styles.linesDivider}>
          <Divider sx={{flex:1,background:'white'}} />
          <span><b>O</b></span>
          <Divider sx={{flex:1,background:'white'}} />
        </div>
        <div className={styles.contentSocial}>
          <Button variant="contained" startIcon={<GoogleIcon />} className={`${styles.socialButton} ${styles.googleButton}`} >
            Google
          </Button>
          <Button variant="contained" startIcon={<img alt="discord" src="/icon-discord.svg" width="20px" />} className={`${styles.socialButton} ${styles.discordButton}`} >
            Discord
          </Button>
        </div>
      </section>
    </main>
  )
}

export default Login