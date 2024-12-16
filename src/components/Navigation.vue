<template>
    <nav>
        <RouterLink to="/">Page Principale</RouterLink> |
        <RouterLink :to="{ name: 'Contact' }">Nous Contacter</RouterLink> |
        <RouterLink :to="{ name: 'Message', params: { message: 'Test' } }">Message de Contact</RouterLink>
    </nav>
</template>