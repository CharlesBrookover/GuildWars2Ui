import {solid}                                                            from "@fortawesome/fontawesome-svg-core/import.macro";
import {FontAwesomeIcon}                                                  from "@fortawesome/react-fontawesome";
import React, {useEffect, useState}                                       from 'react';
import {ListGroup}                                                        from 'react-bootstrap';
import Alert                                                              from "react-bootstrap/Alert";
import Image                                                              from "react-bootstrap/Image";
import HeartOfThorns                                                      from "../../../Assets/GW2-HoT_Texture_Centered_Trans.png";
import PathOfFire                                                         from "../../../Assets/GW2-PoF_Texture_Centered_Trans.png";
import DataListGroup                                                      from "../../../Components/DataListGroup";
import LoadingIcon                                                        from '../../../Components/LoadingIcon';
import useApiQueries                                                      from '../../../Hooks/useApiQueries';
import {ApiAchievement}                                                   from "../../../Types/Api/Achievements";
import {CardDailyAchievementDataListItem, CardDailyAchievementsListProps} from '../types';

const CardDailyAchievementList = ({cardData}: CardDailyAchievementsListProps) => {
    const [listData, setListData] = useState<CardDailyAchievementDataListItem[]>([]);

    const {data, error, status} = useApiQueries<ApiAchievement[]>(
        {
            endpoint:   '/achievements',
            parameters: {ids: cardData.map(item => item.id).join(',')}
        });

    useEffect(() => {
        setListData(() => cardData.map(listItem => {
            const achievement: ApiAchievement | null | undefined = data?.find(item => listItem.id === item.id);

            const newData: CardDailyAchievementDataListItem = {
                id:              listItem.id,
                maxLevel:        listItem.level.max,
                minLevel:        listItem.level.min,
                description:     achievement ? achievement.description : 'Unknown',
                name:            achievement ? achievement.name : 'Unknown',
                requiredProduct: listItem.required_access && listItem.required_access.condition === 'HasAccess' ? listItem.required_access.product : undefined,
                noProduct:       listItem.required_access && listItem.required_access.condition === 'NoAccess' ? listItem.required_access.product : undefined
            };

            return newData;
        }));
    }, [cardData, data]);

    const listLayout = (item: CardDailyAchievementDataListItem) => {
        let variant;
        if (item.maxLevel < 80) {
            variant = 'warning';
        } else if (item.minLevel > 1) {
            variant = 'secondary';
        }

        return <ListGroup.Item variant={variant ?? undefined} key={`${item.id}-${item.minLevel}-${item.maxLevel}`}>
            <div className="d-flex align-items-center">
                <div className="flex-grow-1">{item.name}</div>
                <div className="mx-3" style={{width: '48px'}}>
                    {item.requiredProduct && {
                        'PathOfFire':    <Image fluid src={PathOfFire}/>,
                        'HeartOfThorns': <Image fluid src={HeartOfThorns}/>
                    }[item.requiredProduct]}
                </div>
                <div className="d-flex ">
                    <div className="me-2">Levels</div>
                    <div>{item.minLevel} - {item.maxLevel}</div>
                </div>
            </div>
        </ListGroup.Item>
    };

    return (
        <>
            {status === 'loading'
             ? <LoadingIcon />
             : (error
                ? <Alert variant="danger">{error?.message}</Alert>
                : <DataListGroup data={listData} renderItem={listLayout}/>
             )
            }
        </>
    );
};

export default CardDailyAchievementList;
