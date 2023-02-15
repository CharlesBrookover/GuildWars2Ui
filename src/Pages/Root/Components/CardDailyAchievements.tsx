import React, {useState} from 'react';
import DataCard from "../../../Components/DataCard";
import {DailyAchievementItem, DailyAchievementsProps} from "../types";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Image from "react-bootstrap/Image";
import PathOfFire from "../../../Assets/GW2-PoF_Texture_Centered_Trans.png";
import HeartOfThorns from "../../../Assets/GW2-HoT_Texture_Centered_Trans.png";
import ApiQueryHook from "../../../Services/ApiQueryHook";
import {ApiDailyAchievement} from '../../../Types/Api';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import CardDailyAchievementList from "./CardDailyAchievementList";

const defaultTab = 'pve';
const CardDailyAchievements = ({tomorrow}: DailyAchievementsProps) => {
    const [activeTab, setActiveTab] = useState<string>(defaultTab);

    const endpoint = `/achievements/daily${tomorrow ? '/tomorrow' : ''}`;
    const parameters = {endpoint: endpoint, parameters: {v: 'latest'}};

    const useDailyAchievement = ApiQueryHook<ApiDailyAchievement>({endpoint});
    const {data, error, status, isFetching} = useDailyAchievement({variables: parameters});

    const listItem = (item: DailyAchievementItem) => {

        return <div className="d-flex align-items-center">
            <div className="flex-grow-1">{item.name}</div>
            <div className="mx-3" style={{width: '48px'}}>
                {item.product && {
                    'PathOfFire': <Image fluid src={PathOfFire} />,
                    'HeartOfThorns': <Image fluid src={HeartOfThorns} />
                }[item.product]}
            </div>
        </div>
    };


    return (
        <>
            {status === 'loading'
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
