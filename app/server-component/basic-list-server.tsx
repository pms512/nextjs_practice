type Props = {
    name: string;
    age?: number;
};

function Welcome(props: Props) {
    return <h4>Hello, {props.name}</h4>
}

function BasicList() {
    return (
        <>
            <Welcome name="Alice" />
            <h5 className="text-xl font-bold">웹 기본</h5>
            <h5 className="text-2xl font-bold">구성 요소</h5>
        </>
    );
}

export default BasicList;