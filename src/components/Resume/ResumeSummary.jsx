// eslint-disable-next-line react/prop-types
export default function ResumeSummary({ summary }) {
    const loremIpsum = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ];
    return (
        <>
            <h3 className="title">Summary</h3>
            <p className="summary-description">{(summary && summary.length) ? summary : loremIpsum}</p>
        </>
    )
}