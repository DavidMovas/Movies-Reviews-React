import { render, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import React from "react";


describe('Sidebar', () => {
    test('test render', () => {
        render(<Sidebar/>);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
});