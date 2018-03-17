import React, { Component } from 'react'

import { Input } from 'rebass'
import styled from 'styled-components'

class Form extends Component {
    state = {
        firstName: '',
        lastName: '',
        attending: false
    }

    render() {
        return (
            <FormEl>
                <Label htmlFor="firstName">First Name</Label>
                <StyledInput name="firstName" />
                <Label htmlFor="lastName">Last Name</Label>
                <StyledInput type="text" name="lastName" />
                
                <Label htmlFor="attending">
                    Attending?
                    <input type="checkbox" name="attending" id="attending" />
                </Label>
            </FormEl>

        )
    }
}

const FormEl = styled.form`
    max-width: 60%;
    margin: 60px auto;
`
const Label = styled.label`
`

const StyledInput = styled(Input)`
    margin-top: 10px;
    margin-bottom: 30px;
    &:focus {
        box-shadow: inset 0 0 0 1px #000;
    }
`
export default Form