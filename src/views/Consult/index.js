import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { StyledContainer, StyledBalanceSection, StyledStatementSection, StyledSpan, StyledHeader, StyledChart } from './styles';
import axios from 'axios'
import EwallyTable from '../../components/EwallyTable'
import EwallyChart from '../../components/EwallyChart'

export default function Consult({ match }) {
  
    const state = useSelector(state => state)

    const [initialDate, setInitialDate] = useState(new Date()) 
    const [finalDate, setFinalDate] = useState('') 
    const [data, setData] = useState([])
    const [chartData, setChartData] = useState([])

    let balance = state.balance/100

    const url = `https://apidev.ewally.com.br/b2b/statement?initialDate=${initialDate}&finalDate=${finalDate}`

    
    function handleInputDate(e, field ) {
        
        if(field === 0) return setInitialDate(e.target.value)
        
        return setFinalDate(e.target.value)
    }
    
    async function handleSubmit(e) {
        e.preventDefault()

        const response = await axios.get(url, {
            headers: {"Authorization" : `Bearer ${state.token}`}
        })

        

        setData(response.data.statement)
    }

    return (
        <StyledContainer>
            <StyledBalanceSection>
                <StyledSpan>Saldo</StyledSpan>
                <StyledSpan>R$ {balance.toString().replace('.', ',')}</StyledSpan>   
            </StyledBalanceSection>
            <StyledStatementSection>
                <StyledHeader>
                    <form onSubmit={e => handleSubmit(e)}>
                         <StyledSpan>Extrato:</StyledSpan>
                        <input type="date" 
                            onChange={(e) => handleInputDate(e, 0)}
                        />

                        <input type="date" 
                            onChange={(e) => handleInputDate(e, 1)}
                        />
                        <button type="submit">Buscar</button>
                    </form>
                </StyledHeader>
                {/* <StyledChart>    
                    <EwallyChart data={data}/> 
                </StyledChart> */}
                {data.length > 0 && (
                  <EwallyTable data={data}/>
                )
                }
            </StyledStatementSection>
        </StyledContainer>
    );
}
