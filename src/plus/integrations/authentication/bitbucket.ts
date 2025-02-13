import { HostingIntegrationId } from '../../../constants.integrations';
import { CloudIntegrationAuthenticationProvider } from './integrationAuthenticationProvider';

export class BitbucketAuthenticationProvider extends CloudIntegrationAuthenticationProvider<HostingIntegrationId.Bitbucket> {
	protected override get authProviderId(): HostingIntegrationId.Bitbucket {
		return HostingIntegrationId.Bitbucket;
	}
}
