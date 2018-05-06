import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from 'reactstrap'
import T from 'i18n-react'

const locales = [
	{
		name: 'German',
		localeId: 'de',
		currency: 'EUR',
		symbol: '€',
		locale: 'de-DE',
	},
	{
		name: 'English',
		localeId: 'en',
		currency: 'USD',
		symbol: '$',
		locale: 'en-US',
	},
	{
		name: 'Dansk',
		localeId: 'da',
		currency: 'DKK',
		symbol: 'DKK',
		locale: 'da-DK',
	},
]

@inject('SettingsStore')
@observer
export default class RegionSetting extends Component {
	constructor(props) {
		super(props)
		this.toggle = this.toggle.bind(this)
		this.state = {
			dropdownOpen: false,
		}
	}

	toggle() {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen,
		})
	}

	render() {
		return (
			<div className="row" style={{ height: '75px' }}>
				<div className="col-md-4">
					<font
						style={{
							color: 'white',
							fontFamily: 'AvenirNextLTW01Bold',
						}}
					>
						{T.translate('settings.region.name')}
					</font>
				</div>
				<div className="col-md-2">
					<Dropdown
						isOpen={this.state.dropdownOpen}
						toggle={this.toggle}
					>
						<DropdownToggle
							caret
							style={{
								backgroundColor: 'transparent',
								borderColor: '#fff',
								boxShadow: 'none',
								margin: '0 auto',
							}}
						>
							{this.props.SettingsStore.getLocale}
						</DropdownToggle>
						<DropdownMenu>
							{locales.map(locale => (
								<DropdownItem
									onClick={() => {
										this.props.SettingsStore.setSettingOption(
											{
												key: 'name',
												value: locale.name,
											}
										)
										this.props.SettingsStore.setSettingOption(
											{
												key: 'currency',
												value: locale.currency,
											}
										)
										this.props.SettingsStore.setSettingOption(
											{
												key: 'symbol',
												value: locale.symbol,
											}
										)
										this.props.SettingsStore.setSettingOption(
											{
												key: 'localeId',
												value: locale.localeId,
											}
										)
										this.props.SettingsStore.setSettingOption(
											{
												key: 'locale',
												value: locale.locale,
											}
										)
									}}
								>
									{locale.name}
								</DropdownItem>
							))}
						</DropdownMenu>
					</Dropdown>{' '}
				</div>
				<div className="col-md-6">
					<font
						style={{
							color: 'lightgray',
							fontFamily: 'AvenirNextLTW01Italic',
						}}
					>
						{T.translate('settings.region.explain')}
					</font>
				</div>
			</div>
		)
	}
}
