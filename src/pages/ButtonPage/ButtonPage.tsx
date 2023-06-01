import styles from "./ButtonPage.module.css"
import { ComponentTemplate } from "../../components/ComponentTemplate/ComponentTemplate";
import { Snackbar } from "@mui/material";
import { useState } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
// import jsx from 'react-syntax-highlighter/dist/esm/languages/hljs/';

import { Button_IU5 } from "../../components/customized";

// SyntaxHighlighter.registerLanguage('jsx', jsx);


export const ButtonPage = () => {

    const [open, setOpen] = useState(false);
    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
    };

    return (
        <div className={styles.app}>
            <ComponentTemplate name={'Кнопка'}/>
            <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
                message='Кнопка нажата!'
                transitionDuration={600}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            />
            <Button_IU5 onClick={() => setOpen(true)}>Large</Button_IU5>
            <Button_IU5 disabled>Large</Button_IU5>
            <Button_IU5 onClick={() => setOpen(true)} variant="outlined">Large</Button_IU5>
            <Button_IU5 variant="outlined" disabled>Large</Button_IU5>
            <Button_IU5 onClick={() => setOpen(true)} variant="text">Large</Button_IU5>
            <Button_IU5 variant="text" disabled>Large</Button_IU5>
            {/* <SyntaxHighlighter language="jsx" style={darcula}>
                {'<Button_IU5 onClick={() => setOpen(true)}>Large</Button_IU5>'}
            </SyntaxHighlighter> */}

        </div>
    )
}