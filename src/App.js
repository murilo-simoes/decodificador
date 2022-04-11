import React, { useState } from 'react'

import Card from './components/Card'
import Input from './components/Input'
import Button from './components/Button' 
import useEncrypt from './hooks/useEncrypt'

import './App.css'

function App() {
  const [ code, setCode ] = useState('')
  const [ decode, setDecode ] = useState('')
  const [ tab, setTab ] = useState({
    page: 1,
    name: 'Zenit Polar',
    lang: 'zenit'
  })

  const { encryptData, decryptData } = useEncrypt()

  const handleClick = (i) => {
    setTab({
      page: i,
      name: i === 1 ? 'Zenit Polar' : 'ROT-13',
      lang: i === 1 ? 'zenit' : 'rot',
    })
  }

  function Decode(e) {
    setDecode(e.target.value)
    setCode(decryptData(tab.lang, decode))
  }

  function Code(e) {
    setCode(e.target.value)
    setDecode(encryptData(tab.lang, code))
  }

  function Clean() {
    setCode('')
    setDecode('')
  }

  return (
 
    <div className="bg">
      <Card title="Criptografador" tab1={() => handleClick(1)} tab2={() => handleClick(2)} name={tab.name} page={tab.page}>
        <Input value={decode} onChange={(e) => Decode(e)} label={'Codificar'}/>
        <Input value={code} onChange={(e) => Code(e)} label={'Decodificar'}/>

        <Button click={() => Clean()}>Limpar</Button>
      </Card>
    </div>
  );
}

export default App;
