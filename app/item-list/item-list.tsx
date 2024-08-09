'use client';

import React from "react";

type Props = {
    name: string;
    age?: number;
};

function Welcome(props: Props) {
    return <h4>Hello, {props.name}</h4>
}

function ItemList() {
    const [items, setItems] = React.useState<String[]>([]);
    const [inputValue, setInputvalue] = React.useState<string>('');

    const addItem = () => {
        setItems([...items, inputValue])
        setInputvalue('')
    };

    return (
        <div>
            <Welcome name="Alice" />
            <h5>웹 기본</h5>
            <h1>구성 요소</h1>
            <ul id="itemList">
                <li>HTML</li>
                <li>자바스크립트</li>
                <li>CSS</li>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <input
                type="text"
                value={inputValue}
                onChange={e => setInputvalue(e.target.value)}
                placeholder="항목 추가"
            />
            <button onClick={addItem}>항목 추가</button>
        </div>
    );
}

export default ItemList;