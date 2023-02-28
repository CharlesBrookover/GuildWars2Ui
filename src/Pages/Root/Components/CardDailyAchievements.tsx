import {solid}                  from "@fortawesome/fontawesome-svg-core/import.macro";
import {FontAwesomeIcon}        from "@fortawesome/react-fontawesome";
import React, {useState}        from 'react';
import Tab                      from "react-bootstrap/Tab";
import Tabs                     from "react-bootstrap/Tabs";
import DataCard                 from "../../../Components/DataCard";
import useApiQueries            from '../../../Hooks/useApiQueries';
import {msTillReset}            from '../../../Services/Dates';
import {ApiDailyAchievement}    from '../../../Types/Api/Achievements';
import {DailyAchievementsProps} from "../types";
import CardDailyAchievementList from "./CardDailyAchievementList";

const defaultTab = 'pve';
const CardDailyAchievements = ({tomorrow}: DailyAchievementsProps) => {
    const [activeTab, setActiveTab] = useState<string>(defaultTab);

    const {data, error, isLoading, isFetching} = useApiQueries<ApiDailyAchievement>(
        {
            endpoint:    `/achievements/daily${tomorrow ? '/tomorrow' : ''}`,
            parameters:  {v: 'latest'},
            queryConfig: {
                useErrorBoundary: false,
                staleTime:        msTillReset()
            }
        }
    );

    return (
        <>
            {isLoading
             ? <FontAwesomeIcon icon={solid('spinner')} spin beatFade size="10x" />
             : <DataCard title={`Daily Achievements${tomorrow ? ' (Tomorrow)' : ''}`} error={error?.message}>
                 {isFetching
                  ? <FontAwesomeIcon icon={solid('cogs')} spin />
                  : <Tabs fill activeKey={activeTab} onSelect={tab => setActiveTab(tab || "")}>
                      <Tab eventKey="pve" title="PvE">
                          {data && data.pve.length > 0 ?
                           <CardDailyAchievementList cardData={data.pve} />
                                                       : <div>No Daily Achievements</div>
                          }
                      </Tab>
                      <Tab eventKey="pvp" title="PvP">
                          {data && data.pvp.length > 0 ?
                           <CardDailyAchievementList cardData={data.pvp} />
                                                       : <div>No Daily Achievements</div>
                          }
                      </Tab>
                      <Tab eventKey="wvw" title="WvW">
                          {data && data.wvw.length > 0 ?
                           <CardDailyAchievementList cardData={data.wvw} />
                                                       : <div>No Daily Achievements</div>
                          }
                      </Tab>
                      <Tab eventKey="fractals" title="Fractals">
                          {data && data.fractals.length > 0 ?
                           <CardDailyAchievementList cardData={data.fractals} />
                                                            : <div>No Daily Achievements</div>
                          }
                      </Tab>
                      <Tab eventKey="special" title="Special">
                          {data && data.special.length > 0 ?
                           <CardDailyAchievementList cardData={data.special} />
                                                           : <div>No Daily Achievements</div>
                          }
                      </Tab>
                  </Tabs>}
             </DataCard>
            }
        </>
    );
};

export default CardDailyAchievements;
