
export interface TapdTask {
    taskId: number;
    taskName: string;
    taskItems: TapdTaskItem[];
    isEditMode?: boolean;
    isAddMode?: boolean;
}
export interface TapdTaskItem {
    taskName: string;
    taskDescription?: string;
    taskEndTime?: string;
    taskCloseTime?: string;
    taskLeaderName?: string;
    taskFileNum?: number;
    taskMessageNum?: number;
    taskLevel: number;
}
export interface TaskBadge {
    badgeId: number;
    badgeLabel: string;
    badgeType: string;
}
