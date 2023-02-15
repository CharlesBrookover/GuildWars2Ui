import React, {useEffect, useRef, useState} from 'react';
import DataListGroup from "../../../Components/DataListGroup";
import {ApiAchievement, ApiDailyAchievementItem} from "../../../Types/Api";
import ApiQueryHook from "../../../Services/ApiQueryHook";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import Alert from "react-bootstrap/Alert";
import {detectTanstackQueryImports} from "@tanstack/eslint-plugin-query/build/lib/utils/detect-react-query-imports";
import Image from "react-bootstrap/Image";
import PathOfFire from "../../../Assets/GW2-PoF_Texture_Centered_Trans.png";
import HeartOfThorns from "../../../Assets/GW2-HoT_Texture_Centered_Trans.png";
import {ListGroup, Popover} from 'react-bootstrap';

interface CardDailyAchievementsListProps {
    cardData: ApiDailyAchievementItem[]
}

interface DailyAchievementDataListItem {
    id: number,
    name: string,
    description: string,
    maxLevel: number,
    minLevel: number,
    requiredProduct: 'PathOfFire' | 'HeartOfThorns' | undefined,
    noProduct: 'PathOfFire' | 'HeartOfThorns' | undefined,
}

const CardDailyAchievementList = ({cardData}: CardDailyAchievementsListProps) => {
    const [listData, setListData] = useState<DailyAchievementDataListItem[]>([]);

    const endpoint = '/achievements';

    const useAchievement = ApiQueryHook<ApiAchievement[]>({endpoint});
    const {data, error, status} = useAchievement({
        variables: {
            endpoint,
            parameters: {
                ids: cardData ? cardData.map(item => item.id).join(',') : ''
            }
        }
    });

    useEffect(() => {
        setListData(() => cardData.map(ditem => {
            let newData: DailyAchievementDataListItem = {
                id: ditem.id,
                maxLevel: ditem.level.max,
                minLevel: ditem.level.min,
                description: '',
                name: '',
                requiredProduct: ditem.required_access && ditem.required_access.condition === 'HasAccess' ? ditem.required_access.product : undefined,
                noProduct: ditem.required_access && ditem.required_access.condition === 'NoAccess' ? ditem.required_access.product : undefined
            };

            const achievement: ApiAchievement | undefined = data?.find(item => item.id === ditem.id);
            newData.name = achievement ? achievement.name : 'Unknown';
            newData.description = achievement ? achievement.description : 'Unknown';

            return newData;
        }));
    }, [data]);

    const listLayout = (item: DailyAchievementDataListItem) => {
        let variant;
        if (item.maxLevel < 80) {
            variant = 'warning';
        } else if (item.minLevel > 1) {
            variant = 'secondary';
        }

        return <ListGroup.Item variant={variant ?? undefined} key={item.id}>
            <div className="d-flex align-items-center">
                <div className="flex-grow-1">{item.name}</div>
                <div className="mx-3" style={{width: '48px'}}>
                    {item.requiredProduct && {
                        'PathOfFire': <Image fluid src={PathOfFire} />,
                        'HeartOfThorns': <Image fluid src={HeartOfThorns} />
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
                ? <FontAwesomeIcon icon={solid('cogs')} spin />
                : (error
                        ? <Alert variant="danger">{error?.message}</Alert>
                        : <DataListGroup data={listData} renderItem={listLayout} />
                )
            }
        </>
    );
};

export default CardDailyAchievementList;
