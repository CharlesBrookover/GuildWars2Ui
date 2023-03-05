import React, {ReactNode, useEffect, useState} from 'react';
import LoadingIcon                             from '../../../Components/LoadingIcon';
import {usePageContext}                        from '../../../Contexts/PageContext';
import useApiQueries                           from '../../../Hooks/useApiQueries';
import {DurationInMs}                          from '../../../Services/Dates';
import {ApiBank}                               from '../../../Types/Api/Bank';

const Bank = () => {

    const [chunkedData, setChunkedData] = useState<Array<Array<ApiBank>>>([]);

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
            let newData: Array<ApiBank> = [];
            const chunks: Array<Array<ApiBank>> = [];
            data.forEach((item, idx) => {
                newData.push(item);
                if (idx % 10 === 0 && idx !== 0 ) {
                    chunks.push(newData);
                    newData = [];
                }
            });

            setChunkedData(chunks);
        }
    }, [data]);

    return (
        <>
            {isLoading
             ? <LoadingIcon />
             : <>
                 {chunkedData.map((row, rIdx) =>
                                      <>
                                          <div className="d-flex" key={`row-${rIdx}`}>
                                              {row.map((item, idx) => <div className="flex-grow-1 border-dark border-1" key={`cell=${rIdx}-${idx}`}>
                                                           {item === null
                                                            ? <>X</>
                                                            : <>
                                                                <div>{item.id}</div>
                                                                <div>{item.count}</div>
                                                            </>
                                                           }
                                                       </div>
                                              )}
                                          </div>
                                          {rIdx % 3 === 0 && rIdx !== 0 && <hr />}
                                      </>
                 )}
             </>}
        </>
    );
};

export default Bank;

