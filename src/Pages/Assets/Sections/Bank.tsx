import React, {useEffect, useState} from 'react';
import Col                          from 'react-bootstrap/Col';
import Row                          from 'react-bootstrap/Row';
import Item                         from '../../../Components/Item';
import LoadingIcon                  from '../../../Components/LoadingIcon';
import {usePageContext}             from '../../../Contexts/PageContext';
import useApiQueries                from '../../../Hooks/useApiQueries';
import {DurationInMs}               from '../../../Services/Dates';
import {ApiBank}                    from '../../../Types/Api/Bank';

interface GroupedBank {
    [key: number]: Array<ApiBank[]>;
}

const Bank = () => {

    const [chunkedData, setChunkedData] = useState<GroupedBank>({});

    const context = usePageContext();

    const {data, isLoading} = useApiQueries<ApiBank[]>(
        {
            endpoint:    '/account/bank',
            parameters:  {
                access_token: context.user?.apiKey || ''
            },
            queryConfig: {
                staleTime: DurationInMs({minutes: 5}), useErrorBoundary: true
            }
        }
    );

    useEffect(() => {
        if (data) {
            let row = 1;
            let rowData: ApiBank[] = [];
            let chunks: GroupedBank = {};

            chunks[row] = [];
            data.forEach((item, idx) => {
                console.log(JSON.stringify(item));
                rowData.push(item);
                if (rowData.length === 10) {
                    chunks[row].push(rowData);
                    rowData = [];
                }
                if (chunks[row].length === 3) {
                    row++;
                    chunks[row] = [];
                }
            });

            if (rowData.length > 0) {
                chunks[row].push(rowData);
            }

            setChunkedData(chunks);
        }
    }, [data]);

    return (
        <>
            {isLoading
             ? <LoadingIcon />
             : <>
                 {Object.entries(chunkedData).map(([row, bankSlot]: [string, Array<ApiBank[]>]) => <>
                     <Row key={`row-${row}`} className="mb-2">
                         {bankSlot.map((bankRow, rIdx) =>
                                           <Row key={`bankRow-${row}-${rIdx}`}>
                                               {bankRow.map((bankCell, cIdx) =>
                                                                <>
                                                                    {bankCell === null
                                                                     ? <Col key={`bankCell-${row}-${rIdx}-${cIdx}`} className="bg-light border border-black">
                                                                            &nbsp;
                                                                     </Col>
                                                                     : <Item bankSlot={bankCell} />}
                                                                </>
                                               )}
                                           </Row>
                         )}
                     </Row>
                 </>)}
             </>}
        </>
    );
};

export default Bank;

