import '@styles/globals.css';

export const metadata = {
    title: 'Todo App',
    description: 'A simple TodoApp for everybody to use!',
};

export default function layout({ children }) {
    return (
        <html lang="en">
            <body>
                <div className="app flex justify-center">{children}</div>
            </body>
        </html>
    );
}
