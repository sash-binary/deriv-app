import React from 'react';
import { Div100vhContainer, Icon } from '@deriv/components';
import { localize } from '@deriv/translations';
import SendEmailTemplate from 'App/Containers/Layout/send-email.jsx';
import { isDesktop } from '@deriv/shared/utils/screen';
import { ScrollbarsContainer } from '../../../Components/layout-components.jsx';

const ForgotYourPassword = ({ onClickSendEmail }) => (
    <ScrollbarsContainer>
        <Div100vhContainer
            className='account__scrollbars_container-wrapper'
            is_disabled={isDesktop()}
            height_offset='144px'
        >
            <SendEmailTemplate
                className='forgot-password'
                subtitle={'Please click on the link in the email to reset your password.'}
                onClickSendEmail={onClickSendEmail}
            >
                <div className='forgot-password__content'>
                    <Icon icon='IcEmailSpam' size={32} />
                    <p>{localize('The email is in your spam folder (Sometimes things get lost there).')}</p>
                </div>
                <div className='forgot-password__content'>
                    <Icon icon='IcEmail' size={32} />
                    <p>
                        {localize(
                            'You accidentally gave us another email address (Usually a work or a personal one instead of the one you meant).'
                        )}
                    </p>
                </div>
                <div className='forgot-password__content'>
                    <Icon icon='IcEmailFirewall' size={32} />
                    <p>
                        {localize(
                            'We can’t deliver the email to this address (Usually because of firewalls or filtering).'
                        )}
                    </p>
                </div>
            </SendEmailTemplate>
        </Div100vhContainer>
    </ScrollbarsContainer>
);

export default ForgotYourPassword;
