import React, { useCallback, useState } from 'react';
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import * as cls from './Navbar.module.css';
import { Modal } from "shared/ui/Modal/Modal";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation("navbar");

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModel = useCallback(() => {
        setIsAuthModal(prev => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ThemeButton.OUTLINE}
                className={cls.links}
                onClick={onToggleModel}
            >
                {t('Sing in')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModel}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam, asperiores atque autem beatae blanditiis commodi consectetur consequatur culpa cumque delectus deleniti dolore doloremque dolorum ducimus eius eos esse est et eveniet exercitationem explicabo facere fuga fugiat harum hic illo impedit ipsam ipsum iste iure laborum laudantium libero magnam magni maiores minima minus modi molestiae mollitia natus nemo neque nisi nobis non nostrum nulla numquam odio odit officia omnis optio pariatur perferendis perspiciatis placeat porro possimus quaerat quam quas quasi qui quia quisquam quo quod quos ratione recusandae reiciendis rem repellat reprehenderit repudiandae rerum saepe sapiente sed sequi similique sint sit soluta sunt suscipit tempora temporibus tenetur totam ullam unde vel velit veniam veritatis
            </Modal>
        </div>
    );
};
