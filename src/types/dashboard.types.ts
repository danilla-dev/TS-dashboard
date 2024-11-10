export interface RevenueTrend {
	date: string
	value: number
}

export interface TrafficSource {
	source: string
	value: number
}

export interface DashboardData {
	totalUsers: number
	activeUsers: number
	newSignups: number
	revenue: number
	revenueTrend: RevenueTrend[]
	trafficSources: TrafficSource[]
}

export interface DashboardCardData {
	id: string
	title: string
	value: number | undefined
	formatOptions?: object
}
export interface chartsData {
	id: string
	title: string
	value: RevenueTrend[] | TrafficSource[] | undefined
}
export type chartData = {
	date?: string
	value?: number
	source?: string
}
export interface LinechartProps {
	chartData?: chartData[]
	title?: string
}
export interface DashboardStatsProps {
	card?: DashboardCardData
}
