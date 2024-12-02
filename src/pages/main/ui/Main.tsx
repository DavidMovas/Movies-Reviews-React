import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";

function Main() {
    const {t} = useTranslation();

    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    }

    return (
        <div>
            <h1>{t('Main')}</h1>
            <Input
                label={"Enter value"}
                placeholder={"Type here"}
                type="text"
                value={value}
                onChange={onChange}></Input>
        </div>
    );
}

export default Main;