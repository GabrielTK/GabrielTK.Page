import React, { useEffect } from 'react'
import CodersrankSummary from '@codersrank/summary/esm/codersrank-summary';
export default function CodersRank(props: any) {
    useEffect(() => {
        if(customElements.get("codersrank-summary") == null)
        window.customElements.define('codersrank-summary', CodersrankSummary);
      }, [])
    //@ts-ignore
    return (<codersrank-summary {...props}></codersrank-summary>)
}
