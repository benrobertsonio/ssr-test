
import * as React from "react"

const globalScope = process.env.VARIABLE_A;
const variableF = process.env.VARIABLE_F

const Page = ({ serverData }) => {
  const { dogImage } = serverData
  // Use dogImage in your page...

  const reactScope = process.env.VARIABLE_B;
  const gatsbyReactScope = process.env.GATSBY_REACT_SCOPE;

  return (
    <>
      <h2>React Component Data</h2>
      <pre>{JSON.stringify({
        globalScope,
        reactScope,
        gatsbyReactScope
      }, null, 4)}</pre>
      <h2>getServerData</h2>
      <pre>{JSON.stringify(serverData, null, 4)}</pre>
    </>
  )
}
export async function getServerData() {

  const variableD = process.env.VARIABLE_D;
  const gatsbyVariableA = process.env.GATSBY_VARIABLE_A;

  const res = await fetch(`https://dog.ceo/api/breeds/image/random`)
  const data = await res.json()
  return {
    status: 200,
    props: {
      dogImage: data,
      somevalue: `ben`,
      variableC: process.env.VARIABLE_C,
      variableD: variableD || 'false',
      variableF,
      gatsbyVariableA,
      // testVariable: test2,
      // gatsbyTestVariable: test,
    },
  }
}
export default Page