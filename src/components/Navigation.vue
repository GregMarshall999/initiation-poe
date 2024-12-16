<template>
    <nav>
        <RouterLink to="/">Page Principale</RouterLink> |
        <RouterLink :to="{ name: 'Contact' }">Nous Contacter</RouterLink>
    </nav>
</template>