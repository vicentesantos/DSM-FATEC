import React from 'react'
import { Button } from 'react-native'


const BtCol1 = () => {
    return(
        <>
            <Button
                title="/"
                onPress={() => console.warn('/')} />
            <Button
                title="7"
                onPress={() => console.warn('7')} />
            <Button
                title="4"
                onPress={() => console.warn('4')} />
            <Button
                title="1"
                onPress={() => console.warn('1')} />
        </>
    )
    
}

const BtCol2 = () => {
    return (
        <>        
            <Button
                title="+"
                onPress={() => console.warn('+')} />
            <Button
                title="8"
                onPress={() => console.warn('8')} />
            <Button
                title="5"
                onPress={() => console.warn('5')} />
            <Button
                title="2"
                onPress={() => console.warn('2')} />
        </>
    )
    
}

const BtCol3 = () => {
    return(
        <>
            <Button
                title="*"
                onPress={() => console.warn('*')} />
            <Button
                title="9"
                onPress={() => console.warn('9')} />
            <Button
                title="6"
                onPress={() => console.warn('6')} />
            <Button
                title="3"
                onPress={() => console.warn('3')} />
        </>
    )
    
}

export {BtCol1, BtCol2, BtCol3};