import { useListBooking } from "@/hooks/useBookingQuery";
import { formatDateSafe } from "@/hooks/useFormatDateSafe";
import { useListLocation } from "@/hooks/useLocationQuery";
import { useListRoom } from "@/hooks/useRoomQuery";
import { useListUserPagi } from "@/hooks/useUserQuery";
import { detailUserApi } from "@/services/user.api";
import { useQueries } from "@tanstack/react-query";

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import type { ChartConfig } from "@/components/ui/chart"
export const description = "An area chart with axes"
const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
]
const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "red",
    },
    mobile: {
        label: "Mobile",
        color: "var(--chart-2)",
    },
} satisfies ChartConfig

export default function Dashboard() {

    // API
    const { data: dataUser } = useListUserPagi(1, 1);
    const { data: dataRoom } = useListRoom(1, 1);
    const { data: dataLocation } = useListLocation(1, 1);
    const { data: dataBooking } = useListBooking();
    const dataBookingSort = dataBooking?.sort((a, b) => b.id - a.id).slice(0, 5);

    // get list of unique userId from booking
    const userIds = [...new Set(dataBookingSort?.map(item => item.maNguoiDung) || [])];

    // call multiple APIs User Details
    const userQueries = useQueries({
        queries: userIds.map(id => ({
            queryKey: ["userDetail", id],
            queryFn: () => detailUserApi(id),
            enabled: !!id,
        }))
    })

    // mapping: attach user info to booking
    const bookingWithUser = dataBookingSort?.map(item => {
        const user = userQueries.find(q => q.data?.id === item.maNguoiDung)?.data
        return { ...item, user }
    })

    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Area Chart - Axes</CardTitle>
                    <CardDescription>
                        Showing total visitors for the last 6 months
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={chartConfig}>
                        <AreaChart
                            accessibilityLayer
                            data={chartData}
                            margin={{
                                left: -20,
                                right: 12,
                            }}
                        >
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                tickFormatter={(value) => value.slice(0, 3)}
                            />
                            <YAxis
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                tickCount={3}
                            />
                            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                            <Area
                                dataKey="mobile"
                                type="natural"
                                fill="var(--color-mobile)"
                                fillOpacity={0.4}
                                stroke="var(--color-mobile)"
                                stackId="a"
                            />
                            <Area
                                dataKey="desktop"
                                type="natural"
                                fill="var(--color-desktop)"
                                fillOpacity={0.4}
                                stroke="var(--color-desktop)"
                                stackId="a"
                            />
                        </AreaChart>
                    </ChartContainer>
                </CardContent>
                <CardFooter>
                    <div className="flex w-full items-start gap-2 text-sm">
                        <div className="grid gap-2">
                            <div className="flex items-center gap-2 leading-none font-medium">
                                Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                            </div>
                            <div className="text-muted-foreground flex items-center gap-2 leading-none">
                                January - June 2024
                            </div>
                        </div>
                    </div>
                </CardFooter>
            </Card>
            <div className="flex gap-2">
                <h1>Người dùng</h1>
                <p>{dataUser?.totalRow}</p>
            </div>
            <div className="flex gap-2">
                <h1>Số phòng</h1>
                <p>{dataRoom?.totalRow}</p>
            </div>
            <div className="flex gap-2">
                <h1>Vị trí</h1>
                <p>{dataLocation?.totalRow}</p>
            </div>
            <div className="p-5 mt-5 bg-amber-100">
                <h1>Lịch sử đặt phòng</h1>
                <table>
                    <tbody>
                        <tr>
                            <th>Phòng</th>
                            <th>Ngày đặt phòng</th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                        {bookingWithUser?.map(item => (
                            <tr key={item.id}>
                                <td>{item.maPhong}</td>
                                <td>{formatDateSafe(item.ngayDen)}</td>
                                <td>
                                    <div className={`size-12 rounded-full bg-gray-300 rounded overflow-hidden cursor-pointer relative`}>
                                        {
                                            item.user?.avatar ?
                                                (<img className="w-full h-full object-cover" alt={item.user?.name} src={item.user?.avatar} onError={(e) => e.currentTarget.src = "https://placehold.jp/ababab/ffffff/200x200.jpg?text=NoImg"} />) :
                                                (
                                                    <div className="cursor-pointer w-full h-full flex items-center justify-center bg-gradient-to-r from-sky-300 to-blue-300 rounded-full">
                                                        <p className="text-lg text-white font-medium">
                                                            {item.user?.role === 'ADMIN' ? 'Ad' : "Us"}
                                                        </p>
                                                    </div>
                                                )
                                        }
                                    </div>
                                </td>
                                <td>{item.user?.name}</td>
                                <td>{item.user?.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
