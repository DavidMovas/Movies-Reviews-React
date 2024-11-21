import React, { useEffect, useState } from 'react';
import { Button } from "shared/ui/Button/Button";
import { classNames } from "shared/lib/classNames/classNames";

interface BugButtonProps {
    className?: string;
}

// Component for testing Error Boundary
export const BugButton = ({className}: BugButtonProps) => {
    const [error, setError] = useState(false);

    const invokeError = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            className={classNames('', {}, [className])}
            onClick={invokeError}
            //eslint-disable-next-line i18next/no-literal-string
        >
            Throw Error
        </Button>
    );
}