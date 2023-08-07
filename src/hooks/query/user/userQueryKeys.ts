export const subUserProfilekeys = {
    all: [{ scope: 'sub-user-info' }] as const,
    data: (userId: string) =>
        [{ ...subUserProfilekeys.all[0], entity: 'detail', userId }] as const,
}

export const userProfileKeys = {
    all: ['user-info'] as const,
}

export const userListKeys = {
    all: [{ scope: 'user-list' }] as const,
    lists: () => [{ ...userListKeys.all[0], entity: 'list' }] as const,
}
