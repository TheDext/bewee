import { FC } from 'react';
import { Socials } from 'shared/ui/socials';
import { useSelector } from 'react-redux';
import { getScreenSize } from 'entities/screenSize/model/slice';

interface FooterSocialsProps {
    commonTitleCls?: string;
}

export const FooterSocials: FC<FooterSocialsProps> = ({ commonTitleCls }) => {
    const { isMobile } = useSelector(getScreenSize());
    return (
        <>
            {!isMobile && <div className={commonTitleCls}>Социальные сети</div>}
            <Socials />
        </>
    );
};
